import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../constants';

export const VideoGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredVideo = YOUTUBE_VIDEOS[0];
  const remainingVideos = YOUTUBE_VIDEOS.slice(1);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Work in Motion</h2>
          <p className="text-gray-600 text-lg">Experience the magic through our cinematic storytelling</p>
        </div>

        {/* Featured Video - Auto-play */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=1&mute=1&loop=1&playlist=${featuredVideo.videoId}&controls=1&modestbranding=1&rel=0`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Remaining Videos - Show on Click */}
        {showAll && remainingVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {remainingVideos.map((video) => (
              <div key={video.id} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}?controls=1&modestbranding=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
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
