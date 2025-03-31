import { CopyToClipboardButton } from '@/components/copy-to-clipboard-button';
import { DeleteApplicationButton } from '@/components/delete-application-button';

export const ApplicationPreviewCard = () => {
  return (
    <div>
      <pre>Application Text</pre>
      <DeleteApplicationButton />
      <CopyToClipboardButton />
    </div>
  );
};
