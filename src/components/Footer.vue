<template>
  <footer>
    <p id="footerText">
      Made by
      <a href="mailto:dan@duclearc.com">Duclearc</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  color: rgba(34, 34, 34, 1);
  background-color: rgba(170, 170, 170, 1);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
}
#footerText{
    padding-top: 2rem;
    font-size: 2rem;
}
#footerText a {
    text-decoration: none;
    color: white;
}
</style>