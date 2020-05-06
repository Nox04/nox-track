import React, { useState } from 'react';
import { Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { minutesToHours } from '@src/utils/time';
import Rating from '@src/components/Rating';
import SignInMessage from '@src/components/SignInMessage';
import FloatingForm, { DisplayMode } from '@src/components/CollectionSection/FloatingForm';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { ProgressStatus } from '@src/services/piece.service';

interface PieceHeaderProps {
  piece: Piece;
  onUpdate: () => void;
}
const PieceHeader: React.FC<PieceHeaderProps> = ({ piece, onUpdate }: PieceHeaderProps) => {
  const width = useWindowWidth();
  const [state, setState] = useState('idle');
  const { authStatus } = useAuthContext();

  const ribbonColor = (status: string) => {
    switch (status) {
      case ProgressStatus.IN_PROGRESS:
        return 'bg-purple-700';
      case ProgressStatus.FINISHED:
        return 'bg-green-700';
      default:
        return 'bg-blue-700';
    }
  };

  const onSavedProgress = () => {
    setState('idle');
    onUpdate();
  };

  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex text-white lg:w-11/12 xl:w-3/4">
      <div
        className="bg-center bg-cover bg-no-repeat inline-block p-4 rounded-lg"
        style={{
          backgroundImage: `url(${piece.picture})`,
          height: width > 768 ? 350 : 420,
          minWidth: width > 640 ? 250 : '100%',
        }}
      />
      {state === 'idle' && (
        <div className="flex flex-grow flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex px-4 flex-col flex-grow">
              <h2 className="text-4xl font-medium text-center sm:text-left">{piece.name}</h2>
              <div className="inline-flex">
                <h2 className="text-lg">My Rating: </h2>
                <Rating value={piece.progress?.rating || 0} edit={false} />
              </div>
              <div className="mt-2">
                <h2 className="text-xl">
                  Approximated time: {minutesToHours(piece.minutes)} hours
                </h2>
              </div>
            </div>
          </div>
          {piece.description && <div className="flex p-4">{piece.description}</div>}
          {piece.progress?.finishedTime && (
            <div className="flex p-4">
              Finished: {piece.progress.finishedTime.toString().split('T')[0]}
            </div>
          )}
          <div className="relative p-4">
            <span
              className={`${ribbonColor(
                piece.progress?.status || 'Pending',
              )} px-8 py-2 ribbon capitalize shadow-x truncate rounded`}
            >
              {piece.progress?.status || 'Pending'}
            </span>
          </div>

          <SignInMessage message="If you want to track your progress on this collection, Sign in first." />
          {authStatus === AuthStatus.LOGGED_IN && (
            <div className="relative p-4">
              <button
                className="bg-transparent hover:bg-purple-500 text-white px-1 border border-purple-500 hover:border-transparent rounded max-w-xl"
                onClick={() => setState('editing')}
              >
                Update Progress
              </button>
            </div>
          )}
        </div>
      )}
      {state === 'editing' && (
        <div className="flex flex-grow flex-col">
          <div className="relative h-full mx-4">
            <FloatingForm
              piece={piece}
              previousStatus={piece.progress}
              onCancel={() => setState('idle')}
              onSuccess={onSavedProgress}
              mode={DisplayMode.SECTION}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PieceHeader;
