import React from 'react';
import AudioElement from './AudioElement';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function Playlist({ isPlaying, audios, setAudios, isEditing, togglePlaying, playMode, setPlayingAudioNode, handleDeleteElement }) {

    function handleDragEnd(result) {
        // TODO reorder audios order
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newAudiosArray = [...audios];
        const draggedAudio = {...audios[source.index]};
        newAudiosArray.splice(source.index, 1);
        newAudiosArray.splice(destination.index, 0, draggedAudio);
        setAudios(newAudiosArray);
    }

  return (
    <div className='playlist'>
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='droppable-container'>
                {(provided) => (
                    <div className='playlist__wrapper' {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        audios.map(audio => {
                            return (
                                <AudioElement isPlaying={isPlaying} audio={audio} audios={audios} setAudios={setAudios} isEditing={isEditing} togglePlaying={togglePlaying} key={audio.id} playMode={playMode} setPlayingAudioNode={setPlayingAudioNode} handleDeleteElement={handleDeleteElement}/>
                            );
                        })
                    }
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    </div>
  );
}
