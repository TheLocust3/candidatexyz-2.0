Content.create(content_type: 'raw', identifier: 'campaignId', content: '')
Content.create(content_type: 'text', identifier: 'websiteTitle', content: { text: 'CandidateXYZ' })

Content.create(content_type: 'raw', identifier: 'voluneteerHelpOptions', content: 'Data Entry,Make Calls, Door-to-Door Canvassing,Share information and news on social media,Hold Signs/Standouts')

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
Content.create(content_type: 'text', identifier: 'contactHeader', content: { text: 'Contact Us' })
Content.create(content_type: 'text', identifier: 'contactBlurb', content: { text: "Submit your comments, suggestions or feedback for CandidateXYZ’s election campaign here. For inquiries regarding official business, please contact CandidateXYZ' office." })
Content.create(content_type: 'text', identifier: 'contactVisitHeader', content: { text: 'Contact' })
Content.create(content_type: 'text', identifier: 'contactVisitAddress', content: { text: '11 Beacon St, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactPOBoxHeader', content: { text: 'Write' })
Content.create(content_type: 'text', identifier: 'contactPOBoxAddress', content: { text: 'PO Box 1234, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactCallHeader', content: { text: 'Call' })
Content.create(content_type: 'text', identifier: 'contactPhoneNumber', content: { text: '123-456-7890' })

# take action
Content.create(content_type: 'text', identifier: 'takeActionHeader', content: { text: 'Take Action' })
Content.create(content_type: 'text', identifier: 'takeActionBlurb', content: { text: "We've got lots of ways for you to get involved with us!" })

Content.create(content_type: 'text', identifier: 'takeActionContactHeader', content: { text: 'Join Us!' })
Content.create(content_type: 'text', identifier: 'takeActionContactBlurb', content: { text: 'You better join us' })

Content.create(content_type: 'text', identifier: 'takeActionVolunteerHeader', content: { text: 'Volunteer With Us' })
Content.create(content_type: 'text', identifier: 'takeActionVolunteerBlurb', content: { text: 'We do cool shit' })

# meet
Content.create(content_type: 'text', identifier: 'aboutHeader', content: { text: 'About Me.' })
Content.create(content_type: 'image', identifier: 'aboutBackground', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cc78eaf43b551e79ff018c/1506572620446/20141104_0824+Seth+Moulton+copy.jpg?format=2500w' })
Content.create(content_type: 'richText', identifier: 'aboutBlurb', content: { text: "<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.<br /><br />

    Aliquam cursus sagittis augue, eu volutpat risus iaculis sed. Nulla tempus elementum est et rutrum. Pellentesque sed tempor lectus. Nunc pharetra erat sit amet lectus molestie, ac dignissim lacus fermentum. Aliquam nec tincidunt neque. Cras id sagittis velit, id ornare quam. Vivamus turpis ante, placerat et maximus a, laoreet ac nibh. Mauris semper consequat mi, at sodales est pellentesque sed. Praesent dignissim, ipsum vel porta posuere, nisl eros auctor orci, in ultrices dui enim sed felis. Proin iaculis elementum purus id iaculis. Fusce quis nisi cursus, fringilla ex nec, fringilla lectus. Phasellus ornare fermentum posuere. Nam in mi ornare, efficitur diam ac, scelerisque elit.<br /><br />

    Cras pellentesque tempor vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit orci, molestie nec efficitur et, malesuada et enim. In hendrerit eleifend eros et finibus. Nulla facilisi. Aenean auctor eros ut tortor rutrum, sit amet commodo magna posuere. Sed a aliquam risus.<br /><br />

    In eget sem lacus. Etiam tincidunt est a auctor tempus. Vestibulum porta sed justo non scelerisque. Sed est metus, venenatis sit amet lacinia sed, iaculis eu justo. Donec ligula justo, tincidunt eu augue vel, euismod ultrices libero. Aliquam sed cursus dui. Mauris porttitor ac nisi vel elementum. Aenean tempus vehicula velit, eget dictum lectus eleifend id. Donec a quam condimentum, suscipit tortor nec, dapibus neque. Morbi eleifend placerat blandit. Fusce molestie finibus est, et dignissim metus auctor nec. Nullam aliquam, mauris a semper cursus, risus tortor porttitor dui, nec rutrum turpis augue ut libero. Aliquam non neque posuere, vehicula purus tincidunt, pretium tortor. Proin semper ipsum eget nibh varius eleifend. Sed nibh sapien, molestie vel ligula at, interdum condimentum massa. Sed tempor maximus sem, ac malesuada purus efficitur in.<br /><br />

    Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus
</p>" })
