import { observer } from "mobx-react-lite";
import { PlusIcon } from "lucide-react";
// hooks
import { EmptyState } from "@/components/common";
// constants
import { E_VIEW_ISSUES_EMPTY_STATE } from "@/constants/event-tracker";
import { EIssuesStoreType } from "@/constants/issue";
import { useApplication, useEventTracker } from "@/hooks/store";
// components
// assets
import emptyIssue from "public/empty-state/issue.svg";

export const ProjectViewEmptyState: React.FC = observer(() => {
  // store hooks
  const { commandPalette: commandPaletteStore } = useApplication();
  const { setTrackElement } = useEventTracker();

  return (
    <div className="grid h-full w-full place-items-center">
      <EmptyState
        title="View issues will appear here"
        description="Issues help you track individual pieces of work. With Issues, keep track of what's going on, who is working on it, and what's done."
        image={emptyIssue}
        primaryButton={{
          text: "New issue",
          icon: <PlusIcon className="h-3 w-3" strokeWidth={2} />,
          onClick: () => {
            setTrackElement(E_VIEW_ISSUES_EMPTY_STATE);
            commandPaletteStore.toggleCreateIssueModal(true, EIssuesStoreType.PROJECT_VIEW);
          },
        }}
      />
    </div>
  );
});
