# Phase 6: Planetary Gear Page Refinement - Context

**Gathered:** 2026-07-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Redesign the PlanetaryGearPage subpage layout:
1. Top Section (Hero/Intro):
   - Place the **Final Assembly** first.
   - Large prominent presentation with the assembly image on one side, description and the prominent assembly download button on the other.
2. Scrollable Steps Grid (Sun Gear, Planet Gears, Ring Gear, Rotary Carrier):
   - Presented sequentially downwards.
   - Use side-by-side split layouts.
   - Alternate the layout for visual interest:
     - Section 1 (Sun Gear): Image on left, description and download on right.
     - Section 2 (Planet Gears): Image on right, description and download on left.
     - Section 3 (Ring Gear): Image on left, description and download on right.
     - Section 4 (Rotary Carrier): Image on right, description and download on left.
3. Keep all 10 placeholder references (5 images, 5 files) intact with comments.

</domain>

<decisions>
## Implementation Decisions

- **D-01**: Restructure `PlanetaryGearPage.jsx` directly to use flex/grid configurations that alternate `flex-row` and `flex-row-reverse` on medium+ viewports.
- **D-02**: Add custom scroll-in fade animations if desired, but prioritize responsive spacing and clean article typography.

</decisions>

<canonical_refs>
## Canonical References

- `.planning/PROJECT.md` — Core values and active scope
- `.planning/ROADMAP.md` — Phase 6 goals
- `.planning/REQUIREMENTS.md` — `PROJ-14` to `PROJ-18`

</canonical_refs>

---

*Phase: 06-planetary-gear-refinement*
*Context gathered: 2026-07-09*
