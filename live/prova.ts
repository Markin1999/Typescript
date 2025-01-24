interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function fetchPost(): Promise<Post[]> {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      return response.json();
    })
    .then((data: Post[]) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

async function fetchAsync(): Promise<Post[]> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data: Post[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function visualizza() {
  try {
    const data = await fetchAsync();

    const container = document.getElementById("id");

    if (container) {
      data.forEach((x) => {
        const card = document.createElement("div");
        card.innerHTML = ` 

            <h1>${x.title}</h1>
            <p>${x.body}</p>

            `;
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
