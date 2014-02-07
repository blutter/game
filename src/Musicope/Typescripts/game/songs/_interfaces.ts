// time units = miliseconds
module Musicope.Game.Songs {

  export interface ISustainNoteScene {
    timeOn: number;
    timeOff: number;
  }

  export interface INoteScene {
    timeOn: number;
    timeOff: number;
    id: number;
    velocityOn: number;
    velocityOff: number;
  }

  export interface ISong {
    timePerBeat: number;
    timePerBar: number;
    timePerSong: number;
    noteValuePerBeat: number; // denominator in time signature: 2, 4, 8, 16 ...
    playerTracks: Parsers.INote[][];
    sceneTracks: INoteScene[][];
    sustainNotes: Parsers.ISustainNote[];
    sceneSustainNotes: ISustainNoteScene[];
    minPlayedNoteId: number;
    maxPlayedNoteId: number;
  }

  export interface ISongNew {
    new (midi: Uint8Array, params: Params.IParams): ISong;
  }
}