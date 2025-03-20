import React from "react";
import RiderBunny from "../assets/perna-longa.jpg";

const Images = () => {
  return (
    <div>
      <h1>Conteplem o mago</h1>
      {/* Imagem na pasta pública */}
      <img src="./mago-patolino.jpg" width={1366} height={768} />
      <br />
      <br />
      <br />
      <h1> Obey the King Bunny</h1>
      <br />
      <div
        class="tenor-gif-embed"
        data-postid="8250782239694912343"
        data-share-method="host"
        data-aspect-ratio="1.37569"
        data-width="107%"
      >
        <a href="https://tenor.com/view/happy-birthday-happy-birthday-funny-happy-birthday-friend-birthday-bugs-bunny-gif-8250782239694912343">
          Happy Birthday Happy Birthday Funny GIF
        </a>
        from{" "}
        <a href="https://tenor.com/search/happy+birthday-gifs">
          Happy Birthday GIFs
        </a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
      <br />
      <br />
      <br />
      <h1>Rider Bunny</h1>
      {/* // Imagem importada da pasta src/assets */}
      <img src={RiderBunny} width={1366} height={768} />
      <br />
      <br />
      <h1>The true flag of the nation</h1>
      <div
        class="tenor-gif-embed"
        data-postid="24571457"
        data-share-method="host"
        data-aspect-ratio="1.60804"
        data-width="107%"
      >
        <a href="https://tenor.com/view/imp%C3%A9rio-do-brasil-brasil-monarquia-brasileira-monarquia-imp%C3%A9rio-brasileiro-gif-24571457">
          Império Do Brasil Monarquia Brasileira GIF
        </a>
        from{" "}
        <a href="https://tenor.com/search/imp%C3%A9rio+do+brasil-gifs">
          Império Do Brasil GIFs
        </a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
    </div>
  );
};

export default Images;
