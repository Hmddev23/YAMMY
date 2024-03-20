
import React from 'react';

import './AboutUs.css';


const AboutUs = () => {
  return (
    <main>
      <div className='page-content'>
        <h1>
          Exclusive Blog Content
        </h1>
        <p className='page-sub-title'>
          Content for content lovers, color testers, and font enthusiasts.
        </p>

        <div className='page-image'></div>
        <div className='page-text'>
          <p>
            This is a blog content. You can use it to test the colors and fonts,
            mainly focusing on text. Your average simple, minimal blog post.
          </p>

          <p>
            First, let's check out how different fonts and sizes look on each heading.
          </p>

          <div className='paragraph'>
            <h2>
              Here's an H2 Tag
            </h2>
            <p>
              H2 tags come right after the H1 tag. Usually, there's one H1 tag per document, which is the
              title. The H2 tags are the main headings of the article, and they are kind of necessary because
              they help search engines understand the topic of that document.
            </p>
          </div>

          <div className='paragraph'>
            <h3>
              Here comes the H3 tag
            </h3>
            <p>
              The H3 tags mark the subheadings and their main topics are still related to their respective H2
              tags. For example, here, you're still reading about headings and subheadings.
            </p>
          </div>
          <div className='paragraph'>
            <h4 className='paragraph-header'>H4 tag?</h4>
            <p>
              The journey through heading tags continues. The H4 tag is a subheading for the H3 tag. When do
              you even use it? Whenever you need a section even smaller than the subheading. It's generally
              uncommon and doesn't affect search engine optimization much.
            </p>
          </div>
          <div className='paragraph'>
            <h5>
              There's an H5 too?
            </h5>
            <p>
              Yes, there is. Again, it's not that common, and probably just looks like average text. But who
              knows. Maybe you'll need it.
            </p>
          </div>

          <div className='paragraph'>
            <h2>Colors and Typography</h2>
            <p>
              A lot goes into finding the best combination of colors and fonts. Let's figure out how to excel
              at this.
            </p>
          </div>

          <div className='paragraph'>
            <h3>Colors and Texts</h3>
            <p>
              This is not just a typography playground. It's a color playground too. Colors matter a lot when
              it comes to reading. If you're using pure black text on a white background or vice versa, the
              text could create an effect called 'Halation.' This effect blurs out the text and makes it fuzzy
              and hard to read. So try out different colors and check whether the texts are readable in
              different fonts and colors.
            </p>
          </div>

          <div className='paragraph'>
            <h3>Heading and Body Text</h3>
            <p>
              Some fonts are just not made for body text. They're chunky, massive, wide, or just unreadable.
              Some others are too thin for headings. That's exactly why you have two options here: headings
              and body text fonts. Try locking and randomizing each one using the font category (sans-serif,
              monospace, etc.) to reach a good combo.
            </p>
          </div>

          <div className='paragraph'>
            <h2>Over to you</h2>
            <p>
              After all of that, you could try exporting the fonts or colors or both to your project in
              different formats. Fonts are listed in REM values to help with responsive designs.
            </p>

            <p>
              In the end, thanks for reading this blog post, and hope it's been helpful. If you liked it, make
              sure to share it with your friend (write something nice about this template).
            </p>
          </div>

          <br />
        </div>

        <a href='https://twitter.com/intent/tweet?text=https://realtimecolors.com/blog-post'
           target='_blank'
           className='secondary-button exclude'
        >
          Share this on X
        </a>
      </div>
    </main>
  );
}


export default AboutUs;