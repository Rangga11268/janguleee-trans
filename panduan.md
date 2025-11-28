## Error Type
Runtime Error

## Error Message
window is not defined


    at Hero (components\Hero.tsx:11:38)

## Code Frame
   9 |   const y = useMotionValue(0);
  10 |
> 11 |   const mouseX = useTransform(x, [0, window.innerWidth], [-20, 20]);
     |                                      ^
  12 |   const mouseY = useTransform(y, [0, window.innerHeight], [-20, 20]);
  13 |
  14 |   const handleMouseMove = (e: React.MouseEvent) => {

Next.js version: 16.0.4 (Turbopack)
