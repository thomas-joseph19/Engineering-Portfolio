document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  
  // 1. Scroll Handler for Header transparency
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Initial check on load in case page is refreshed while scrolled down
  handleScroll();

  // 2. Mobile Nav Hamburger Toggle
  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      header.classList.toggle('nav-open');
    });
    
    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        header.classList.remove('nav-open');
      }
    });

    // Close menu when links are clicked (useful for single page anchor links or load trans)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
      });
    });
  }

  // 3. Projects Page Card Listing & Filter Logic
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    let projectsData = [];
    
    const renderProjects = (filterCategory = 'all') => {
      projectsGrid.innerHTML = '';
      
      const filtered = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());
        
      if (filtered.length === 0) {
        projectsGrid.innerHTML = `
          <div class="placeholder-box" style="width: 100%; grid-column: 1/-1; margin: var(--space-xl) 0;">
            <i class="fas fa-search fa-3x" style="color: var(--color-accent); margin-bottom: var(--space-md);"></i>
            <h3>No projects found</h3>
            <p>Try selecting a different category or check back later.</p>
          </div>
        `;
        return;
      }
      
      filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <img src="${project.thumbnail}" alt="${project.title}" class="card-thumbnail" onerror="this.src='https://placehold.co/600x400/0f172a/3b82f6?text=${encodeURIComponent(project.title)}'">
          <div class="card-content">
            <div class="card-category">${project.category}</div>
            <h3 class="card-title"><a href="project.html?project=${project.slug}">${project.title}</a></h3>
            <p class="card-summary">${project.summary}</p>
            <div class="card-footer">
              <div class="card-tags">
                ${project.tags.slice(0, 3).map(tag => `<span class="badge">${tag}</span>`).join('')}
              </div>
              <span class="card-date">${new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
            </div>
          </div>
        `;
        projectsGrid.appendChild(card);
      });
    };

    fetch('projects/projects.json')
      .then(res => res.json())
      .then(data => {
        // Sort by date newest first
        projectsData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        renderProjects();
      })
      .catch(err => {
        console.error('Error fetching projects index:', err);
        projectsGrid.innerHTML = `<p style="color: red; text-align: center; width: 100%;">Failed to load projects database.</p>`;
      });

    // Wire up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.category);
      });
    });
  }

  // 4. Project Viewer Page Logic & Markdown Engine
  const projectViewer = document.getElementById('project-viewer');
  if (projectViewer) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get('project');
    
    if (!projectSlug) {
      projectViewer.innerHTML = `<p style="color: red; text-align: center;">No project selected.</p>`;
      return;
    }
    
    fetch(`projects/${projectSlug}/project.md`)
      .then(res => {
        if (!res.ok) throw new Error('Project file not found');
        return res.text();
      })
      .then(markdown => {
        // Parse YAML frontmatter
        const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
        const match = markdown.match(frontmatterRegex);
        
        let meta = {};
        let bodyMarkdown = markdown;
        
        if (match) {
          const yamlContent = match[1];
          bodyMarkdown = match[2];
          try {
            meta = jsyaml.load(yamlContent) || {};
          } catch (e) {
            console.error('YAML frontmatter parsing failed, falling back:', e);
            yamlContent.split('\n').forEach(line => {
              const parts = line.split(':');
              if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join(':').trim();
                
                // Handle tags array
                if (key === 'tags') {
                  meta[key] = value.replace(/[\[\]]/g, '').split(',').map(t => t.trim());
                } else {
                  meta[key] = value.replace(/^['"]|['"]$/g, ''); // strip quotes
                }
              }
            });
          }
        }
        
        // Render Header Meta
        const headerHtml = `
          <div class="project-meta-header">
            <a href="projects.html" style="color: var(--color-accent); font-weight: 500; font-size: 0.9rem; display: inline-flex; align-items: center; margin-bottom: var(--space-md);"><i class="fas fa-arrow-left" style="margin-right: 8px;"></i> Back to Projects</a>
            <h1 class="project-meta-title">${meta.title || 'Untitled Project'}</h1>
            <div class="project-meta-details">
              <span class="project-meta-item"><i class="fas fa-tag"></i>${meta.category || 'Engineering'}</span>
              <span class="project-meta-item"><i class="fas fa-calendar-alt"></i>${meta.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Unknown'}</span>
            </div>
            <div class="card-tags" style="margin-top: var(--space-sm);">
              ${meta.tags ? meta.tags.map(tag => `<span class="badge" style="font-size: 0.85rem; padding: 4px 10px;">${tag}</span>`).join('') : ''}
            </div>
          </div>
        `;
        
        // Render Body
        const parsedHtml = marked.parse(bodyMarkdown);
        
        projectViewer.innerHTML = headerHtml + `<div class="markdown-body">${parsedHtml}</div>`;
        
        // Post-render processing: image layouts and lightbox
        processProjectImages();
      })
      .catch(err => {
        console.error('Error loading project:', err);
        projectViewer.innerHTML = `
          <div class="placeholder-box" style="margin-top: var(--space-3xl);">
            <i class="fas fa-exclamation-triangle fa-3x" style="color: red; margin-bottom: var(--space-md);"></i>
            <h3>Project Load Failed</h3>
            <p>We couldn't retrieve the project file. Please return to the portfolio.</p>
            <a href="projects.html" class="btn btn-primary" style="margin-top: var(--space-md);">Back to Projects</a>
          </div>
        `;
      });
  }

  // Helper functions for image grouping and lightbox
  function processProjectImages() {
    const images = Array.from(document.querySelectorAll('.markdown-body img'));
    const rows = [];
    
    // Group consecutive images with 2-col or 3-col prefixes
    let currentGroup = [];
    let currentCols = 0;
    
    images.forEach((img) => {
      const alt = img.getAttribute('alt') || '';
      let cols = 0;
      let cleanAlt = alt;
      
      if (alt.startsWith('2-col:')) {
        cols = 2;
        cleanAlt = alt.substring(6).trim();
      } else if (alt.startsWith('3-col:')) {
        cols = 3;
        cleanAlt = alt.substring(6).trim();
      }
      
      img.setAttribute('alt', cleanAlt);
      img.setAttribute('loading', 'lazy');
      
      if (cols > 0) {
        if (currentCols === cols && currentGroup.length > 0) {
          currentGroup.push(img);
        } else {
          // Flush existing group
          if (currentGroup.length > 0) {
            rows.push({ cols: currentCols, imgs: currentGroup });
          }
          currentGroup = [img];
          currentCols = cols;
        }
      } else {
        if (currentGroup.length > 0) {
          rows.push({ cols: currentCols, imgs: currentGroup });
          currentGroup = [];
          currentCols = 0;
        }
      }
    });
    
    if (currentGroup.length > 0) {
      rows.push({ cols: currentCols, imgs: currentGroup });
    }
    
    // Create grid structures for grouped images
    rows.forEach(group => {
      const firstImg = group.imgs[0];
      const parent = firstImg.parentNode;
      
      const galleryRow = document.createElement('div');
      galleryRow.className = `gallery-row gallery-col-${group.cols}`;
      
      parent.insertBefore(galleryRow, firstImg);
      
      group.imgs.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        img.parentNode.removeChild(img);
        item.appendChild(img);
        
        const captionText = img.getAttribute('alt');
        if (captionText) {
          const caption = document.createElement('div');
          caption.className = 'gallery-caption';
          caption.innerText = captionText;
          item.appendChild(caption);
        }
        
        galleryRow.appendChild(item);
        
        item.addEventListener('click', () => {
          openLightbox(img.src, captionText);
        });
      });
      
      if (parent.tagName === 'P' && parent.children.length === 0 && parent.innerText.trim() === '') {
        parent.parentNode.removeChild(parent);
      }
    });

    // Make standard (non-grouped) images also launch lightbox
    document.querySelectorAll('.markdown-body img').forEach(img => {
      if (!img.parentNode.classList.contains('gallery-item')) {
        img.style.cursor = 'zoom-in';
        img.style.maxWidth = '100%';
        img.style.borderRadius = 'var(--border-radius)';
        img.style.border = '1px solid var(--color-border)';
        img.style.margin = 'var(--space-md) 0';
        img.addEventListener('click', () => {
          openLightbox(img.src, img.getAttribute('alt') || '');
        });
      }
    });
  }

  // 5. About Page Renderer
  const aboutBio = document.getElementById('about-bio');
  if (aboutBio) {
    fetch('data/profile.json')
      .then(res => res.json())
      .then(profile => {
        document.getElementById('profile-img').src = profile.profileImage;
        document.getElementById('profile-tagline').innerText = profile.tagline;
        aboutBio.innerHTML = marked.parse(profile.bio);

        // Render education
        const eduContainer = document.getElementById('about-education');
        eduContainer.innerHTML = profile.education.map(edu => `
          <div style="margin-bottom: var(--space-sm);">
            <div style="font-weight: 600; font-size: 0.95rem;">${edu.degree}</div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">${edu.school}</div>
            <div style="font-size: 0.8rem; font-weight: 500; margin-top: 2px;">GPA: ${edu.gpa}</div>
            <div style="font-size: 0.8rem; color: var(--color-text-muted);">${edu.date}</div>
            <div style="font-size: 0.8rem; font-style: italic; color: var(--color-text-muted); margin-top: 4px;">${edu.details}</div>
          </div>
        `).join('');

        // Render interests
        const interestsContainer = document.getElementById('about-interests');
        interestsContainer.innerHTML = profile.interests.map(interest => `
          <span class="badge" style="margin-bottom: 4px; margin-right: 4px;">${interest}</span>
        `).join('');

        // Render experience timeline
        const expContainer = document.getElementById('about-experience');
        expContainer.innerHTML = profile.experience.map(exp => `
          <div class="exp-item" style="margin-bottom: var(--space-lg); border-left: 2px solid var(--color-accent); padding-left: var(--space-md); margin-left: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: var(--space-xs);">
              <h4 style="font-size: 1.1rem; font-weight: 600; margin: 0;">${exp.role}</h4>
              <span style="font-size: 0.8rem; font-weight: 500; color: var(--color-accent); background-color: var(--color-accent-light); padding: 2px 6px; border-radius: var(--border-radius);">${exp.date}</span>
            </div>
            <div style="font-size: 0.9rem; font-weight: 500; color: var(--color-text-muted); margin-bottom: var(--space-xs);">${exp.company} &bull; ${exp.location}</div>
            <ul style="padding-left: var(--space-md); font-size: 0.9rem; line-height: 1.5; color: var(--color-text-muted);">
              ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('');

        // Render career goals
        const goalsContainer = document.getElementById('about-goals');
        goalsContainer.innerHTML = profile.goals.map(goal => `
          <li style="margin-bottom: var(--space-sm);">${goal}</li>
        `).join('');
      })
      .catch(err => {
        console.error('Error rendering about page:', err);
        aboutBio.innerHTML = `<p style="color: red;">Failed to load profile data.</p>`;
      });
  }

  // 6. Resume Page Renderer
  const resumeIframe = document.getElementById('resume-iframe');
  if (resumeIframe) {
    fetch('data/profile.json')
      .then(res => res.json())
      .then(profile => {
        resumeIframe.src = profile.resume.path;
        document.getElementById('resume-last-updated').innerText = `Last updated: ${profile.resume.lastUpdated}`;
        document.getElementById('resume-download-btn').href = profile.resume.path;
      })
      .catch(err => {
        console.error('Error rendering resume page:', err);
      });
  }

  // 7. Contact Page Renderer
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) {
    fetch('data/profile.json')
      .then(res => res.json())
      .then(profile => {
        contactEmail.href = `mailto:${profile.contact.email}`;
        document.getElementById('contact-email-text').innerText = profile.contact.email;
        
        const linkedinLink = document.getElementById('contact-linkedin');
        linkedinLink.href = profile.contact.linkedin;
        linkedinLink.querySelector('p').innerText = profile.contact.linkedin.split('/').pop();
        
        const githubLink = document.getElementById('contact-github');
        githubLink.href = profile.contact.github;
        githubLink.querySelector('p').innerText = profile.contact.github.split('/').pop();
        
        document.getElementById('contact-resume-btn').href = profile.resume.path;
      })
      .catch(err => {
        console.error('Error rendering contact page:', err);
      });
  }

  // Lightbox Modal functionality
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
    <div class="lightbox-content">
      <img id="lightbox-img" src="" alt="">
      <div id="lightbox-caption" class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  
  const openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCap.innerText = caption;
    lightbox.classList.add('active');
  };
  
  const closeLightbox = () => {
    lightbox.classList.remove('active');
  };
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
