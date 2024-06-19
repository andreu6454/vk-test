import cls from './Tabs.module.css'
import {memo, ReactNode, useCallback} from "react";

export interface TabItem {
    value: string,
    content: ReactNode
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        tabs,
        value,
        onTabClick
    } = props

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [])

    return (
        <div
            className={cls.Tabs}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value
                return (
                    <div
                        onClick={clickHandle(tab)}
                        className={isSelected ? cls.SelectedTab : cls.Tab}
                        key={tab.value}
                    >
                        {tab.content}
                    </div>
                )
            })}
        </div>
    );
});