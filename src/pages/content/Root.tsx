import Commands from "@src/components/command/Commands"
import CompactLayout from "@src/components/layouts/CompactLayout"
import MainLayout from "@src/components/layouts/MainLayout"
import QuickLinks from "@src/components/quickAccess/QuickLinks"
import Table from "@src/components/table/Table"
import { PageData } from "@src/types/pageContentTypes"
import ModuleHeader from "@src/components/header/ModuleHeader"
import WideLayout from "@src/components/layouts/WideLayout"
import CommandInput from "@src/components/command/CommandInput"
import { useCommand } from "@src/components/command/CommandContext"
import { useContext } from "react"
import { ConfigContext } from "@src/contexts/ConfigContext"
import FileMetricsTracker from "@src/components/versionControl/FileMetricsTracker"
import SubheaderBreadcrumbs from "@src/components/header/SubheaderBreadCrumbs"
import { PageStateContext } from "@src/contexts/PageStateContext"

interface RootProps {
    content: PageData
}

export default function Root({ content }: RootProps) {
    const { fileLinks, sortLinks } = content

    const { setOpen } = useCommand()
    const { showCommandButton, showQuickLinks } = useContext(ConfigContext)

    const { isLoading, pageData } = useContext(PageStateContext)

    const handleCommandActivation = () => {
        setOpen(true)
    }

    return (
        <>
            <Commands />
            {showCommandButton && (
                <WideLayout>
                    <CommandInput onSelect={handleCommandActivation} />
                </WideLayout>
            )}
            <MainLayout>
                <CompactLayout>
                    <ModuleHeader />
                    <SubheaderBreadcrumbs />
                </CompactLayout>
                {isLoading ? 'loading' : 'done'}
                {JSON.stringify(pageData)}
                {showQuickLinks && <QuickLinks />}
                <Table fileLinks={fileLinks} sortLinks={sortLinks} />
                <FileMetricsTracker fileLinks={fileLinks} />
            </MainLayout>
        </>
    )
}
