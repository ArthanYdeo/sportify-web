// Sample data for posts (you can replace this with a backend)
const posts = [];

// Function to display posts in their respective containers
function displayPosts() {
    const currentDate = new Date();
    const container = document.querySelector('.news-container');
    container.innerHTML = ''; // Clear the container

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('news-itema');


        postElement.style.backgroundColor = '#ffffff';
        postElement.style.border = '2px solid #dddddd';
        postElement.style.borderRadius = '20px';
        postElement.style.padding = '20px'

    

        // Format the date and time as desired (e.g., "Month Day, Year - Hour:Minute")
        const formattedDate = currentDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

     postElement.innerHTML = `
     <a href="#" class="icon-link">
     <i class='bx bxs-user-circle' style="font-size: 5rem;"></i>
 </a> 

 <a class="user-name-link">
     <h2 style="margin-left: 80px; margin-top: -50px;"></h2>
     <h1 style="margin-left:5rem; margin-top:-0.5rem; font-weight:bold; font-size:20px; color:black;">Shakirah De Vera</h1>
     <br><small style="margin-left: 5rem; margin-top:-5rem;">${formattedDate}</small> <br>
 </a>
    <br>    
    <p style="margin-left: 8rem; font-size: 1rem; margin-top:1rem; font-weight:bold;">${post}</p>

 <div class="voting" >
     <button class="likebtn" id="likebtn">
         <i class='bx bxs-like'></i>
     </button>
     <span class="likeCount">0</span><span class="text">Like</span>
     <button class="commentbtn" id="commentbtn">
         <i class='bx bx-message-dots'></i>
     </button>
     <span type="text" value=""></span><span class="text">Comment</span>
     <br>
     <button class="deletebtn" onclick="deletePost(${index})">Delete</button>
</div>
`;

        container.appendChild(postElement);
        function toggleCommentInput() {
            const commentInput = document.getElementById('commentInput');
            commentInput.style.display = 'block';
          }
        

        // Set up event listener for the "Like" button for each post
        const likeButton = postElement.querySelector(".likebtn");
        const likeCount = postElement.querySelector(".likeCount");


        let currentLikeCount = 0;
        let isLiked = false;

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle('clicked');
            if (isLiked) {
                currentLikeCount--;
                likeButton.style.color = "#000"; // Change the color when unliked
              } else {
                currentLikeCount++;
                likeButton.style.color = "#007980"; // Change the color when liked
              }

            isLiked = !isLiked;
            likeCount.textContent = currentLikeCount;

            if (currentLikeCount > 0) {
                likeCount.style.display = "inline";
            } else {
                likeCount.style.display = "none";
            }
        });
    });
}

            // Function to add a new post
            function addPost() {
                const postText = document.getElementById('post-text').value;
                if (postText.trim() !== '') {
                    posts.push(postText);
                    displayPosts();
                    document.getElementById('post-text').value = '';
                }
            }

            // Function to delete a post
            function deletePost(index) {
                posts.splice(index, 1);
                displayPosts();
            }

            // Event listeners
            document.getElementById('post-button').addEventListener('click', addPost);
            displayPosts();