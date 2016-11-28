#Hey there Dolan, this is YOUR README.

There's not much to explain so this shouldn't take long. If you want to change something on your website, navigate to the appropriate file using the links above. The file you're looking for will very probably be in the "views" folder. Once you get there, each file represents a page on your site. Go to file for the page you want to change.

#Changing Your Site

Near the top of the page, you'll see a gray bar with some information on it (e.g. "178 lines") and some buttons (e.g. "Raw", "Blame", and "History"). Click to pencil button to edit the page. Edit the page, and save, and you're done! Your changes should be reflected on the site within about 10 minutes.

#Changing Pictures

If you're trying to change the banner photo at the top, or either of the testimonial photos, do this in the public/styles.css file. The lines you need to edit are right at the top of the file.

If you're trying to change the images of properties in the carousel, do this in the views/index.html file. Code for the carousels begins around line 115. Be sure you do not just change the main image, but you update the thumbnail image as well

The photos on your site when I hand it over to you are not yours. I don't know whose they are or if they're under copyright. You should replace these photos. To do so, sign in to your Cloudinary account, upload a photo and open it.
It'll have a url something like this:
```
http://res.cloudinary.com/dtwgk5mnq/image/upload/v1480364337/2016080731-PJ-Houses-1800-Holly-Kellum-1906_nq9qkm_b6xgkv.jpg
```

The url you need to put into the code has a tiny difference. It'll look like this:
```
http://res.cloudinary.com/dtwgk5mnq/image/upload/c_scale,w_780/v1480364337/Varassaari5_pw4gpa_gossol.jpg
```

After 'image/upload/' the url reads `c_scale,w_780`. Cloudinary uses this to scale your image for you. It may say '780' or '150' depending on the image you're trying to replace. Copy and paste this bit from the image you're replacing and put it into the url you get from Cloudinary. Also, either choose images that have the same or similar dimensions as the ones already on the site, or use Cloudinary's image editing tools to cut them to size.

#Editing the text of the auto-mailer

Do this in /public/app.js. The current text of the email is on lines 18-25. Currently, it begins
```javascript
Dear ${req.body.fname} ${req.body.lname}
```
You can insert the firstname of the person submitting the form with ${req.body.fname}, their last name with ${req.body.lname}, and so on.

Alright I think that about covers it. Good luck
