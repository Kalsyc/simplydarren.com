<script lang="ts">
  import homeSelfie from '$lib/assets/img/home-img.jpg';
</script>

<div class="personal">
  <div class="personal__info">
    <h1>Sim Jun Yuen, Darren</h1>
    <div>Location: Based in Singapore</div>
    <div>Nationality: Singaporean Citizen</div>
    <div>GitHub: <a href="https://github.com/Kalsyc">github.com/Kalsyc</a></div>
    <div>Contact: <a href="mailto:kalsycofficial@gmail.com">kalsycofficial@gmail.com</a></div>
    <div>Languages: English, Mandarin Chinese (Both native)</div>
  </div>
  <div class="personal__img">
    <img alt="" src={homeSelfie} />
  </div>
</div>

<style>
  .personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .personal__img {
    height: 200px;
    width: 200px;
  }

  .personal__img > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media screen and (min-width: 600px) {
    .personal {
      flex-direction: row;
      text-align: left;
    }
  }
</style>
