<template>
  <div class="card card-carousel overflow-hidden h-50 p-0 mt-5">
    <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
      <div class="carousel-inner border-radius-lg h-100">
        <div
          class="carousel-item h-100 active"
          :style="{backgroundImage: 'url(' + require('@/assets/img/phy.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <h5 class="text-white mb-1">Get started with Argon</h5>
            <p>There's nothing I really wanted to do in life that I wasn't able to get good at.</p>
          </div>
        </div>
        <div
          class="carousel-item h-100"
          :style="{backgroundImage: 'url(' + require('@/assets/img/phy2.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <h5 class="text-white mb-1">Faster way to create web pages</h5>
            <p>That's my skill. I'm not really specifically talented at anything except for the ability to learn.</p>
          </div>
        </div>
        <div
          class="carousel-item h-100"
          :style="{backgroundImage: 'url(' + require('@/assets/img/phy3.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <h5 class="text-white mb-1">Share with us your design tips!</h5>
            <p>Don't be afraid to be wrong because you can't learn anything from a compliment.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselComp",
};
</script>
