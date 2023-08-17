document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const postList = document.getElementById('post-list');
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        postList.appendChild(postDiv);


        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    }
});


const aiGeneratedMessages = [
    { title: 'Exploring Protect Plus', content: 'My friend told me about this website. With its URL checker, I can always stay safe. ' },
    { title: 'Stay Secure Online', content: 'I am a 73 year old, who wanted to connect with her grandchildren online. So, I got a smartphone. My son told me about this website to ensure I stay safe online.' },
    { title: 'Learn About Red Flags', content: 'Protect Plus is an excellent resource for learning about online red flags and potential threats. As an educator in the field of cybersecurity, this is one of the websites I put on my syllabus.' }
];

window.addEventListener('load', function() {
    const postList = document.getElementById('post-list');
    aiGeneratedMessages.forEach(message => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${message.title}</h3>
            <p>${message.content}</p>
        `;
        postList.appendChild(postDiv);
    });
});
