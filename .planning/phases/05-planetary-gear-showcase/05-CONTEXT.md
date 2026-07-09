# Phase 5: Planetary Gear Showcase - Context

**Gathered:** 2026-07-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Develop the Planetary Gear project overview card and the detailed sub-page.
1. Projects Page (`src/pages/ProjectsPage.jsx`):
   - Update layout to render a Project Card instead of a blank page.
   - Project Card must have:
     - Image of final product next to text.
     - Extremely brief description (no dates).
     - Showcase design skills: SolidWorks CAD Modeling, Assembly Constraints, Mechanical Engineering Design.
     - A button linking to detailed subpage `/projects/planetary-gear`.
2. Detailed Subpage (`src/pages/PlanetaryGearPage.jsx`):
   - Standalone subpage with detailed SolidWorks design steps (no dates).
   - Render 5 placeholder images:
     - planet gear
     - ring gear
     - rotary gear
     - sun gear
     - final product
   - Render download links for CAD parts and final assembly:
     - Planet gear CAD part
     - Ring gear CAD part
     - Rotary gear CAD part
     - Sun gear CAD part
     - Final assembly CAD file
   - Explicit comments above all 10 placeholder references.
3. Assets Setup:
   - Create directories `public/assets/images/projects/planetary-gear` and `public/assets/documents/projects/planetary-gear`.
   - Place physical placeholder files for the 5 images and 5 CAD files.
4. Routing integration:
   - Add new route `/projects/planetary-gear` in `src/App.jsx` pointing to `PlanetaryGearPage`.

</domain>

<decisions>
## Implementation Decisions

- **D-01**: Centralize project planetary gear details in `src/data/projects.js` or directly inside page components to keep organization structured.
- **D-02**: Generate a base placeholder image and copy it for the 5 different gears/assembly placeholders.
- **D-03**: Create small text files with CAD extensions (`.sldprt`, `.sldasm`) for the 5 CAD placeholders.
- **D-04**: Use client-side routes `/projects/planetary-gear` in HashRouter, matching `src/App.jsx`.

</decisions>

<canonical_refs>
## Canonical References

- `.planning/PROJECT.md` — Core values and active scope
- `.planning/ROADMAP.md` — Phase 5 goals
- `.planning/REQUIREMENTS.md` — `PROJ-03` to `PROJ-13`

</canonical_refs>

---

*Phase: 05-planetary-gear-showcase*
*Context gathered: 2026-07-09*
