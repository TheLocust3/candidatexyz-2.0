Content.create(content_type: 'raw', identifier: 'campaignId', content: '')
Content.create(content_type: 'text', identifier: 'websiteTitle', content: { text: 'CandidateXYZ' })

# help
Content.create(content_type: 'text', identifier: 'helpSampleText', content: { text: 'Some sample text' })
Post.create(post_type: 'help', url: 'help-sample-long', title: 'Sample Post', body: "
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum turpis, eu commodo arcu. Phasellus ut nibh urna. Nulla lobortis purus sollicitudin varius malesuada. Fusce in lacus ac massa dapibus mattis. Donec finibus, nisl non dignissim dictum, metus nulla aliquam augue, vitae egestas diam ligula in mi. Donec pretium placerat mauris efficitur tempor. Pellentesque eu enim neque. Fusce laoreet tortor at justo consectetur, in bibendum lectus gravida. Fusce ligula ante, consequat a lorem vitae, pretium laoreet est. Integer ligula dui, eleifend ut ipsum vitae, blandit hendrerit leo. Etiam pharetra orci ut justo volutpat tempor. Pellentesque id augue erat. Quisque in risus mauris. Donec at fermentum turpis.</p>")

# navbar
Content.create(content_type: 'image', identifier: 'logo', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w' })

Content.create(content_type: 'link', identifier: 'navLink1', content: { text: 'About', url: '/about' })
Content.create(content_type: 'link', identifier: 'navLink2', content: { text: 'Issues', url: '/issues' })
Content.create(content_type: 'link', identifier: 'navLink3', content: { text: 'News', url: '/news' })

Content.create(content_type: 'link', identifier: 'navButton1', content: { text: 'Take Action', url: '/action' })
Content.create(content_type: 'link', identifier: 'navButton2', content: { text: 'Donate Now', url: 'https://secure.actblue.com' })

# footer
Content.create(content_type: 'link', identifier: 'footerLink4', content: { text: 'Contact', url: '/contact' })

# news
Content.create(content_type: 'text', identifier: 'newsHeader', content: { text: 'News' })

# issues
Content.create(content_type: 'text', identifier: 'issuesHeader', content: { text: 'Issues' })

# contact
Content.create(content_type: 'text', identifier: 'contactHeader', content: { text: "Contact Us" })
Content.create(content_type: 'text', identifier: 'contactBlurb', content: { text: "Submit your comments, suggestions or feedback for CandidateXYZ’s election campaign here. For inquiries regarding official business, please contact CandidateXYZ' office." })
Content.create(content_type: 'text', identifier: 'contactVisitHeader', content: { text: 'Contact' })
Content.create(content_type: 'text', identifier: 'contactVisitAddress', content: { text: '11 Beacon St, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactPOBoxHeader', content: { text: 'Write' })
Content.create(content_type: 'text', identifier: 'contactPOBoxAddress', content: { text: 'PO Box 1234, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactCallHeader', content: { text: 'Call' })
Content.create(content_type: 'text', identifier: 'contactPhoneNumber', content: { text: '123-456-7890' })
