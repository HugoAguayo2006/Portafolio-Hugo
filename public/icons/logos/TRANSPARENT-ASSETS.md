# Transparent tech stack assets

Original WebP assets are preserved alongside the transparent PNG variants.

The PNG variants were edited with the built-in image_gen tool using each original logo as the edit target. No CLI or API key was used.

## Prompt set

For REST API, WebSockets and Google Maps: remove the white background and preserve the existing logo geometry, text and foreground colors. Output genuine transparent alpha, without a tile, circle, shadow or new text. Frame the complete logo with a small transparent margin. For Google Maps, remove the surrounding white circle and the white background in the pin hole.

For Plasmo and Render: apply the same background extraction and change the black foreground to white for contrast on the dark carousel cards.

For OpenStreetMap, Leaflet, VBA and ActiveX: apply the same background extraction, preserve colored details, and change dark text/outlines to off-white for contrast on the dark cards.

For Google for Education: remove the white circle/background, preserve the exact wordmark and Google colors, and change only the gray “for Education” text to off-white. Output transparent alpha with a small transparent margin.

## SVG variants

framermotion-light.svg and sqlalchemy-light.svg are local variants of the corresponding Devicon SVGs. Only dark fills were changed to off-white; geometry is unchanged. See DEVICON-SOURCES.md and DEVICON-LICENSE.txt for source and license information.
