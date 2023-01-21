"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoExporter = void 0;
class VideoExporter {
}
exports.VideoExporter = VideoExporter;
class LosslessVideoExporter extends VideoExporter {
    prepareExport(videoData) {
        console.log('preparing video data for lossless export');
    }
    doExport(outputFolderPath) {
        console.log(`Exporting video data in lossless format to ${outputFolderPath}.`);
    }
}
class H264BPVideoExporter extends VideoExporter {
    prepareExport(videoData) {
        console.log('preparing video data for H.264 (Baseline) export');
    }
    doExport(outputFolderPath) {
        console.log(`Exporting video data in H.264 (Baseline) format to ${outputFolderPath}.`);
    }
}
class AudioExporter {
}
/** AAC audio exporting codec */
class AACAudioExporter extends AudioExporter {
    prepareExport(audioData) {
        console.log('preparing Audio data for AAC export');
    }
    doExport(outputFolderPath) {
        console.log(`Exporting Audio data in AAC format to ${outputFolderPath}.`);
    }
}
/** WAV (Lossless) audio exporting codec */
class WAVAudioExporter extends AudioExporter {
    prepareExport(audioData) {
        console.log('preparing Audio data for AAC export');
    }
    doExport(outputFolderPath) {
        console.log(`Exporting Audio data in AAC format to ${outputFolderPath}.`);
    }
}
/**
 *  Factory that represents a combination of video and audio codecs.
 *  The factory doesn't maintain any of the instances it creates.
 */
class ExporterFactory {
}
class FastExporter extends ExporterFactory {
    getAudioExporter() {
        return new AACAudioExporter();
    }
    getVideoExporter() {
        return new H264BPVideoExporter();
    }
}
class HighQualityExporter extends ExporterFactory {
    getAudioExporter() {
        return new WAVAudioExporter();
    }
    getVideoExporter() {
        return new LosslessVideoExporter();
    }
}
const getFactory = (factory) => {
    const factories = { 'fast': new FastExporter(), 'high': new HighQualityExporter() };
    return factories[factory];
};
const initExport = (exporterFactory) => {
    const videoExporter = exporterFactory.getVideoExporter();
    const audioExporter = exporterFactory.getAudioExporter();
    videoExporter.prepareExport("placeholder_for_video_data");
    audioExporter.prepareExport("placeholder_for_audio_data");
    const savePath = '/usr/tmp/video';
    videoExporter.doExport(savePath);
    audioExporter.doExport(savePath);
};
const mediaExporterFactory = getFactory('fast');
initExport(mediaExporterFactory);
