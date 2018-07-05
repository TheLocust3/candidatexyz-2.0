Content.create(content_type: 'raw', identifier: 'campaignId', content: '')
Content.create(content_type: 'text', identifier: 'websiteTitle', content: { text: 'CandidateXYZ' })

# help
Content.create(content_type: 'text', identifier: 'helpSampleText', content: { text: 'Some sample text' })
Post.create(post_type: 'help', url: 'help-sample-long', title: 'Sample Post', body: "
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum turpis, eu commodo arcu. Phasellus ut nibh urna. Nulla lobortis purus sollicitudin varius malesuada. Fusce in lacus ac massa dapibus mattis. Donec finibus, nisl non dignissim dictum, metus nulla aliquam augue, vitae egestas diam ligula in mi. Donec pretium placerat mauris efficitur tempor. Pellentesque eu enim neque. Fusce laoreet tortor at justo consectetur, in bibendum lectus gravida. Fusce ligula ante, consequat a lorem vitae, pretium laoreet est. Integer ligula dui, eleifend ut ipsum vitae, blandit hendrerit leo. Etiam pharetra orci ut justo volutpat tempor. Pellentesque id augue erat. Quisque in risus mauris. Donec at fermentum turpis.</p>")
