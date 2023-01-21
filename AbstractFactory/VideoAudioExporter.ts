export abstract class VideoExporter {
    public abstract prepareExport(videoData:unknown): void
    public abstract doExport(outputFolderPath:string): void
}

class LosslessVideoExporter extends VideoExporter  {
    public prepareExport(videoData:unknown): void {
        console.log('preparing video data for lossless export')
    }
    public doExport(outputFolderPath:string): void {
        console.log(`Exporting video data in lossless format to ${outputFolderPath}.`)
    }
}

class H264BPVideoExporter extends VideoExporter  {
    public prepareExport(videoData:unknown): void {
        console.log('preparing video data for H.264 (Baseline) export')
    }
    public doExport(outputFolderPath:string): void {
        console.log(`Exporting video data in H.264 (Baseline) format to ${outputFolderPath}.`)
    }
}

abstract class AudioExporter {
    public abstract prepareExport(audioData:unknown): void
    public abstract doExport(outputFolderPath:string): void
}

/** AAC audio exporting codec */
class AACAudioExporter extends AudioExporter {
    public prepareExport(audioData:unknown): void {
        console.log('preparing Audio data for AAC export')

    }

    public doExport(outputFolderPath:string): void {
        console.log(`Exporting Audio data in AAC format to ${outputFolderPath}.`)
    }
}

/** WAV (Lossless) audio exporting codec */
class WAVAudioExporter extends AudioExporter {
    public prepareExport(audioData:unknown): void {
        console.log('preparing Audio data for AAC export')

    }

    public doExport(outputFolderPath:string): void {
        console.log(`Exporting Audio data in AAC format to ${outputFolderPath}.`)
    }
}


/**
 *  Factory that represents a combination of video and audio codecs.
 *  The factory doesn't maintain any of the instances it creates.
 */
abstract class ExporterFactory {

    /** Returns a new video exporter belonging to this factory. */
    public abstract getVideoExporter(): VideoExporter

    /** Returns a new audio exporter belonging to this factory. */
    public abstract getAudioExporter():AudioExporter
}

class FastExporter extends ExporterFactory {
    public getAudioExporter(): AudioExporter {
        return new AACAudioExporter();
    }

    public getVideoExporter(): VideoExporter {
        return new H264BPVideoExporter()
    }
}

class HighQualityExporter extends ExporterFactory {
    public getAudioExporter(): AudioExporter {
        return new WAVAudioExporter();
    }

    public getVideoExporter(): VideoExporter {
        return new LosslessVideoExporter()
    }
}

const getFactory = (factory: 'fast'| 'high'): ExporterFactory => {
    const factories = {'fast': new FastExporter(), 'high': new HighQualityExporter()}
    return factories[factory]
}


const initExport = (exporterFactory: ExporterFactory):void => {
    const videoExporter = exporterFactory.getVideoExporter();
    const audioExporter = exporterFactory.getAudioExporter();

    videoExporter.prepareExport("placeholder_for_video_data");
    audioExporter.prepareExport("placeholder_for_audio_data");

    const savePath = '/usr/tmp/video'

    videoExporter.doExport(savePath)
    audioExporter.doExport(savePath)
}

const mediaExporterFactory = getFactory('fast');
initExport(mediaExporterFactory)