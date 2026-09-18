# Approved visual language

The production homepage uses **original Concept A**, not A2. `Hero.tsx` and
`concept-a.css` preserve its desktop composition, typography, colors, surfaces,
and timing. The archived lab remains available through the `concept` query.

## Reuse

- `NetworkAmbientBackground`: exact approved hero geometry, or a small header
  field. The `calm` variant has no moving packets and is used on Contact.
- `SignalPath`: occasional SVG packets and path illumination for headers and
  existing diagrams. It does not introduce a canvas or a new illustration.
- `SpotlightCard`: neutral surface, a pointer spotlight and a small spring lift.
  Set `spotlight={false}` for quieter cards, or `lift={0}` for static surfaces.
  `useSpotlight` supplies the same lighting to existing anchor elements.
- `SectionHeader` / `sectionMotion`: stagger the badge, heading and description
  over 450–700ms without animating individual letters.
- `AnimatedStat`: animate numeric values once, reserve their final width, and
  preserve suffixes. Labels such as `ISO` and `24/7` stay static.
- `MotionPreferencesProvider`: share reduced-motion, pointer and compact-screen
  preferences. Pointer movement uses motion values, not React render loops.

## Visual hierarchy

Keep the homepage the strongest network field. Page headings use fewer nodes
and lower opacity; normal cards only use interaction details. Existing About
and Clients diagrams remain the main illustrations on those pages.

Use cream surfaces, dark slate text, thin neutral borders and orange signal
accents. Services may be more interactive; Sectors uses small connector marks;
Clients remains steady; Contact stays quiet while the form is being edited.

`network.css` is scoped to `.network-page`, so these adaptations cannot restyle
the approved homepage or the archived concepts. Mobile removes most hero
packets and half its nodes, disables pointer effects and pauses client-lane
autoplay. Reduced motion also stops count-ups and decorative animations.
