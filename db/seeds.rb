Content.create(content_type: 'raw', identifier: 'campaignId', content: '')
Content.create(content_type: 'text', identifier: 'websiteTitle', content: { text: 'CandidateXYZ' })

Content.create(content_type: 'raw', identifier: 'voluneteerHelpOptions', content: 'Data Entry,Make Calls, Door-to-Door Canvassing,Share information and news on social media,Hold Signs/Standouts')

# social media
Content.create(content_type: 'link', identifier: 'facebook', content: { text: 'Facebook', url: 'http://www.facebook.com' })
Content.create(content_type: 'link', identifier: 'twitter', content: { text: 'Twitter', url: 'http://www.twitter.com' })
Content.create(content_type: 'link', identifier: 'instagram', content: { text: 'Instagram', url: 'http://www.instagram.com' })
Content.create(content_type: 'link', identifier: 'youtube', content: { text: 'Youtube', url: 'http://www.youtube.com' })

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

# index
Content.create(content_type: 'image', identifier: 'indexBackground', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cd9e5032601e2e1011ec17/1506647684440/Seth-headshot-smile.jpg?format=2500w' })
Content.create(content_type: 'text', identifier: 'indexHeaderBoxSignUp', content: { text: 'Sign Up For Updates' })
Content.create(content_type: 'text', identifier: 'indexHeaderBoxFollow', content: { text: 'Follow Me' })
Content.create(content_type: 'text', identifier: 'indexDonateBoxHeader', content: { text: 'Donate to Us.' })

Content.create(content_type: 'link', identifier: 'donateButton1', content: { text: '$10', url: 'https://secure.actblue.com' })
Content.create(content_type: 'link', identifier: 'donateButton2', content: { text: '$25', url: 'https://secure.actblue.com' })
Content.create(content_type: 'link', identifier: 'donateButton3', content: { text: '$50', url: 'https://secure.actblue.com' })
Content.create(content_type: 'link', identifier: 'donateButton4', content: { text: '$100', url: 'https://secure.actblue.com' })
Content.create(content_type: 'link', identifier: 'donateButton5', content: { text: '$250', url: 'https://secure.actblue.com' })
Content.create(content_type: 'link', identifier: 'donateButton6', content: { text: 'Other', url: 'https://secure.actblue.com' })

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

# privacy
Content.create(content_type: 'text', identifier: 'privacyHeader', content: { text: 'Privacy Policy' })
Content.create(content_type: 'text', identifier: 'privacyBlurb', content: { text: "
<p>CandidateXYZ for Office has created this privacy notice to explain how we use information that you may provide while visiting our website and to demonstrate our firm commitment to Internet privacy.</p>

<p>CandidateXYZ for Office may modify this policy from time to time so we encourage you to check this page for updates.</p>

<p><b>How We Use Your Information</b></p>

<p>CandidateXYZ for Office is committed to protecting your privacy online.</p>

<p>When you register, contribute, sign up to volunteer, or take any other action on our site, we may ask you to give us contact information, including your name, address, telephone number and/or email address. We may obtain information about you from outside sources and add it to or combine it with the information we collect through this site. We use this information to operate this site, send you news and information to you about CandidateXYZ for Office, and to solicit your participation in CandidateXYZ for Office programs, events, and activities, and obtain and confirm your attendance at events. We use your information (including your email address, phone number, or address) to communicate with you for these purposes.</p>

<p>We will not provide your email address or any of your personal information to any other person or organization, for any purpose except: to CandidateXYZ’s authorized campaign committee, CandidateXYZ for Office; to any other political committee established by CandidateXYZ; to any other organization established and controlled by CandidateXYZ; to websites affiliated with CandidateXYZ; to companies that assist us in maintaining such sites, but only for purposes of providing services to the sites and with the strict requirement that any such company will never itself have the right to contact you for any reason; when we have a good-faith belief release is appropriate to comply with the law (for example, Federal Election Commission reporting or a lawful subpoena), to protect our rights or property, or to protect our supporters from fraudulent, abusive, or unlawful conduct, or if we reasonably believe that an emergency involving immediate danger of death or serious physical injury to any person requires disclosure of communications or justifies disclosure of records without delay.</p>

<p>If you sign an online petition, you understand that such petition is public information and that we may make the petition, and your name, city, state, and any comments provided in connection therewith publicly available. In addition, we may provide such petitions or compilations thereof, including your comments, name, city, and state to national, state or local leaders, or to the press.</p>

<p>The site may use social media plugins that let people share actions they take across web. Plugins may share your browsing information with the social media sites even if you do not click on the plugin or are logged out of your social media account.</p>

<p><b>How We Protect Information You Provide</b></p>

<p>CandidateXYZ for Office uses industry standard security measures to protect against the loss, misuse or alteration of the information under our control. Permission to access your information is granted only to you and CandidateXYZ for Office employees or contractors who need to know that information to provide services to you. Although we make good faith efforts to store information collected by this website in a secure operating environment, including environments operated by third parties, we cannot guarantee complete security.</p>

<p>When you make a contribution through this website, we collect credit card information from you.  That information is used solely for processing your contribution; is not maintained by CandidateXYZ for Office; is transmitted via third-party payment processing provider (and according to the payment processing provider’s security protocols) for processing, and is never disclosed to anyone, for any other purpose other than for processing your contribution, under any circumstances.</p>

<p><b>Links to Other Websites</b></p>

<p>This privacy policy covers this website and its subdomains, and not any third-party sites. These sites link to third-party websites. We are not responsible for the content or privacy policies of these third-party sites. We encourage you to read the privacy policies and review the practices of all websites you visit.</p>

<p><b>SPECIAL NOTICE FOR PARENTS:</b></p>

<p>We want to help you guard your children’s privacy. We encourage you to talk to your children about safe and responsible use of their personal information while using the Internet. CandidateXYZ for Office does not knowingly collect, use or distribute children’s personally identifiable information to any third parties. If you have any reservations, questions or concerns about your child’s access to this site or how information that your child provides is used by us, please contact us.</p>

<p><b>Cookies, Advertising, and Data Tracking</b></p>

<p>A cookie is a piece of data stored on the user’s hard drive containing information about the user.</p>

<p>The CandidateXYZ for Office website uses a cookie and may use other similar tracking tools for measuring aggregate web statistics, and traffic, and other information. CandidateXYZ for Office will also use cookies to facilitate your online visit by maintaining data that you provide for online activities for your convenience so that you will not need to resubmit certain information.</p>

<p>We may also use third-party services such as Google Analytics that collect information about you and your website use. This helps us understand traffic patterns and know if there are problems with our site. We may also use tools in emails to track information about our mailings for various reasons. We are not responsible for and do not control how third-party services use your information.</p>

<p>We may place online advertising with third parties which will be shown on other sites on the Internet. In some cases, those third parties may decide which ads to show you based on your prior visits to the site. At no time will you be personally identified to those third parties, nor will any of the information you share with us be shared with those third party vendors. If you prefer to opt out of the use of these third party cookies on the site, you can do so by visiting the Network Advertising Initiative opt out page.</p>

<p>We log standard technical information, such as your IP address and the kind of browser you use. We log this information for troubleshooting purposes and to track which pages people visit in order to improve the site. We do not use log files to track a particular individual’s use of the website.</p>

<p><b>How to Unsubscribe or Opt Out</b></p>

<p>You may opt out of receiving future communications by using the unsubscribe procedure specified on the email message or by contacting team@candidatexyz.com.</p>

<p><b>How We Notify You About Privacy Policy Changes</b></p>

<p>We retain the right to amend or otherwise update this Privacy Policy at any time. By using our site, you consent to the collection and use of the information as we have described. If we change our policies and practices, we will post the changes in our Privacy Statement so that you are always aware of them. With this knowledge, you can make an informed decision about whether you wish to provide personal information to us.</p>

<p><b>How To Contact Us</b></p>

<p>Questions regarding this Privacy Policy should be emailed to team@candidatexyz.com</p>

<p><i>Updated March 11, 2018</i></p>
" })
