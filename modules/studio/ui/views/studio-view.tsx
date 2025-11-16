import { VideoSection } from '@/modules/studio/ui/sections/video-section';

export const StudioView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Channel Content</h1>
        <p className="text-muted-foreground text-xs">
          Manage your channel&apos;s videos and content here.
        </p>
      </div>
      <VideoSection />
    </div>
  );
};
