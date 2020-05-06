import React, { useEffect, useState } from 'react';
import Rating from '@src/components/Rating/index';
import { Piece, UserPieceRelationship } from '@src/types';
import { ProgressStatus, updateProgressOnPiece } from '@src/services/piece.service';

export enum DisplayMode {
  CARD,
  SECTION,
}

interface FloatingFormProps {
  piece: Piece;
  onSuccess: () => void;
  onCancel: () => void;
  previousStatus?: UserPieceRelationship;
  mode: DisplayMode;
}

const FloatingForm: React.FC<FloatingFormProps> = ({
  piece,
  onCancel,
  onSuccess,
  previousStatus,
  mode,
}: FloatingFormProps) => {
  const [rating, setRating] = useState(0);
  const [finishedTime, setFinishedTime] = useState(new Date().toISOString().split('T')[0]);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<string>(ProgressStatus.PENDING);

  useEffect(() => {
    if (previousStatus) {
      const rawDate = previousStatus.finishedTime
        ? new Date(previousStatus.finishedTime)
        : new Date();
      setFinishedTime(rawDate.toISOString().split('T')[0]);
      setRating(previousStatus.rating || 0);
      setComment(previousStatus.comment || '');
      setStatus(previousStatus.status || ProgressStatus.PENDING);
    }
  }, [previousStatus]);

  const sendForm = async () => {
    console.log(finishedTime);
    await updateProgressOnPiece(piece.id, {
      comment,
      rating: rating.toString(),
      finishedTime: finishedTime ? new Date(finishedTime).toISOString() : undefined,
      status: status,
    });
    onSuccess();
  };

  return (
    <div className="absolute bg-gray-900 w-full h-full top-0 z-10 p-4 rounded">
      <h2 className="text-xl truncate text-center font-medium py-1">{piece.name}</h2>
      <div className="inline-block relative w-full py-1">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value={ProgressStatus.PENDING}>Pending</option>
          <option value={ProgressStatus.IN_PROGRESS}>In Progress</option>
          <option value={ProgressStatus.FINISHED}>Finished</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <Rating
        className="pb-2"
        size={20}
        value={rating}
        onChange={(rating: number) => setRating(rating)}
      />
      <input
        type="date"
        className="w-full py-2 text-black bg-white"
        value={finishedTime}
        onChange={(event) => setFinishedTime(event.target.value)}
      />
      <textarea
        className="resize-none border rounded focus:outline-none focus:shadow-outline w-full my-2 text-black bg-white"
        rows={4}
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
      <div className="flex flex-col">
        <button
          className="bg-transparent hover:bg-purple-700 text-white p-1 my-1 border border-purple-700 hover:border-transparent rounded w-full"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-transparent hover:bg-purple-700 text-white p-1 my-1 border border-purple-700 hover:border-transparent rounded w-full"
          onClick={sendForm}
        >
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default FloatingForm;
