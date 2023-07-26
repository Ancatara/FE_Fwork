import React from 'react';

type AvatarProps = {
  imageUrl?: string;
  name?: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, name }) => {
  const getInitialsFromName = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  const displayContent = imageUrl ? (
    <div
      className="w-12 h-12 rounded-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ) : (
    <span className="text-white text-xl font-bold">
      {name ? getInitialsFromName(name) : 'A'}
    </span>
  );

  return (
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300"
    >
      {displayContent}
    </button>
  );
};

export default Avatar;
