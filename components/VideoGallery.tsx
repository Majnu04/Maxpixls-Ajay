import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../constants';

export const VideoGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set([0])); // Autoplay featured video
  const featuredVideo = YOUTUBE_VIDEOS[0];
  const remainingVideos = YOUTUBE_VIDEOS.slice(1);

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Work in Motion</h2>
          <p className="text-gray-600 text-lg">Experience the magic through our cinematic storytelling</p>
        </div>

        {/* Featured Video */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            {playingVideos.has(0) ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=1&mute=1&loop=1&playlist=${featuredVideo.videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&fs=1&iv_load_policy=3&disablekb=1`}
                title={featuredVideo.title}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            ) : (
              <>
                <img
                  src={`https://img.youtube.com/vi/${featuredVideo.videoId}/maxresdefault.jpg`}
                  alt={featuredVideo.title}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors"
                     onClick={() => handlePlayVideo(0)}>
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                    <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Remaining Videos - Show on Click */}
        {showAll && remainingVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {remainingVideos.map((video) => (
              <div key={video.id} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-black">
                {playingVideos.has(video.id) ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=1&iv_load_policy=3&disablekb=1`}
                    title={video.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors"
                         onClick={() => handlePlayVideo(video.id)}>
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                        <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center">
          {!showAll && remainingVideos.length > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors mb-4"
            >
              <Play className="w-5 h-5" />
              View More Videos ({remainingVideos.length})
            </button>
          )}
          
          <a
            href={`https://youtube.com/@maxpixlsphotography?si=ukqlockeDCbux8ns`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            <Play className="w-5 h-5" />
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
