### image serving

- image optimization for the bg image, is just not really working. I think the issue is that netlify’s edge function is timing out when transcoding it and it’s giving up, or something. You see a 301 at first when it tries to downloading, and then the real thing is downloaded later.
- Also for some reason it is not using the blurry version at all (it does in localhost).
- probably I need to use a real cdn. cloudinary has a free tier?

- I think blur doesnt work properly with priority on current Image, so I switched to a later one. but this one seems to take longer in absolute terms to load? Maybe try deploying to vercel or using a real cdn for the images.
