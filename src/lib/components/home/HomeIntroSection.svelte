<script lang="ts">
  import homeSelfie from '$lib/assets/img/home-img.jpg';
</script>

<div class="home-intro-section">
  <div class="home-intro-section__writeup">
    <h1>Hello there! 👋</h1>
    <p>
      I'm Darren Sim, a Software Engineer from Singapore, specializing in Web Development and UI/UX Design.
      <br />
      <br />
      When I'm not creating amazing digital experiences, I enjoy teaching and exploring new tech! 😺 Feel free to explore my work and passions on this
      site. Enjoy! 🎉
      <br />
      <br />
      You may contact me at <a href="mailto:kalsycofficial@gmail.com">kalsycofficial@gmail.com</a>. I always appreciate making new friends :D
      <br />
    </p>
    Other Links:
    <ul>
      <li><a href="https://www.linkedin.com/in/kalsyc/">LinkedIn</a></li>
      <li><a href="https://github.com/Kalsyc">GitHub</a></li>
    </ul>
  </div>
  <div class="home-intro-section__selfie">
    <img alt="" class="selfie__img" src={homeSelfie} />
  </div>
</div>

<style>
  .home-intro-section {
    display: grid;
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }

  .home-intro-section__writeup {
    text-align: justify;
  }

  .home-intro-section__writeup > ul > li > a {
    text-decoration: underline;
    font-weight: 700;
  }

  .home-intro-section__writeup > ul > li > a:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .home-intro-section__selfie {
    height: 200px;
    width: 200px;
  }

  .selfie__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media screen and (min-width: 600px) {
    .home-intro-section {
      grid-template-rows: 1fr;
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
