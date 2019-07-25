import React from "react";
import MedalPlayer from "medal-video-player";
import videos from "../../assets/videos/videos";
import "./VideoFeed.css";

class VideoFeed extends React.Component {
  state = {
    videos
  };

  render() {
    return (
      <div className="VideoFeed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam
        nihil incidunt obcaecati. Accusamus vero voluptatum architecto at
        reiciendis exercitationem iure! Quae numquam dolorum animi optio qui
        molestiae repellendus blanditiis perferendis accusantium! Sapiente porro
        optio excepturi ab iure, molestias laboriosam nihil illum similique odio
        velit minima tempora nesciunt accusamus suscipit quis quibusdam aliquam.
        Minima similique autem sed minus culpa! Quam, omnis magnam. Voluptatibus
        commodi doloribus, excepturi soluta cupiditate natus dicta ea neque
        pariatur alias incidunt numquam saepe, vel, sit similique voluptates
        delectus exercitationem eveniet dolore mollitia nemo qui beatae
        accusantium! Pariatur in quaerat facilis voluptatibus obcaecati voluptas
        quis? Neque, placeat!
        <MedalPlayer
          content={videos[0]}
          user={videos[0].poster}
          videoOpts={{
            autoplay: false,
            loop: true,
            muted: true,
            controls: true,
            embedded: true,
            retry: true
          }}
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere
        quaerat quos amet optio, dolores mollitia tenetur sint maxime harum
        numquam quia voluptatem maiores exercitationem aspernatur ducimus illo
        repellendus. Suscipit praesentium numquam, id a possimus officia iure
        nostrum ut laboriosam labore quae veniam aliquam minus veritatis dolorem
        nam quo? Eius quam aspernatur dolorum vitae nesciunt ipsa neque
        laboriosam minima unde magni harum et nemo quas, molestiae sapiente,
        iste asperiores! Nemo, nihil quos quidem at modi est similique natus
        nobis molestias corporis cumque veniam, sapiente ratione itaque
        laboriosam iusto consequuntur exercitationem amet iste! Minus doloribus
        eum, quo architecto aut tenetur animi?
      </div>
    );
  }
}

export default VideoFeed;
