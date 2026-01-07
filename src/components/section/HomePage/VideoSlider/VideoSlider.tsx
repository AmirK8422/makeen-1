import Slider from "./Slider";

function VideoSlider() {
  return (
    <div className="relative mx-4 sm:mx-10 lg:mx-20 text-center mt-24 mb-12">
      <h2 className="font-semibold text-3xl mb-5">آخرین ویدیو ها</h2>
      <Slider />
    </div>
  );
}

export default VideoSlider;
