import { useState } from 'react';
import { Heart } from "lucide-react";

type SkillCardProps = {
  name: string
}

const SkillCard = ({ name }: SkillCardProps) => {
  const [liked, setLiked] = useState(false);
  const likes = liked ? 1 : 0;

  return (
    <article className="flex items-center justify-between rounded-3xl border p-5">
      <div className="flex items-start gap-4 justify-between">
        <div className="space-y-2">
          <p>Skill</p>
          <h2 className="display-title text-xl font-bold">{name}</h2>
          <p className="text-sm text-lime-500">{likes} {likes === 1 ? 'like' : 'likes'}</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-full p-2 border border-gray-300 shadow-md bg-gray-100" onClick={() => setLiked(current => !current)} type="button" aria-pressed={liked}>
          <Heart className={liked ? "fill-current text-lime-500" : "none"} size={18} />
        </button>
      </div>
    </article>
  )
}

export default SkillCard