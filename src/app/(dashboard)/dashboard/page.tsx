import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderNav,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from '@/components/dashboard/page'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'


export default function Page() {


    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Principal</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                teste
            </DashboardPageMain>
        </DashboardPage>
    )
}