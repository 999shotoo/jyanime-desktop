import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

const Home = () => {

  return (
    <MediaPlayer title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8">
      <MediaProvider />
      <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} slots={{
        googleCastButton: null,
        airPlayButton: null,
        
      }} />
    </MediaPlayer>
  );
};
export default Home;
