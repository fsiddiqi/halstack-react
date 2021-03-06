import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable from "./api.jsx";
import SidenavTokensTable from "./Tokens.jsx";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import defaultSidenav from "./examples/default";
import pushSidenav from "./examples/pushSidenav";
import fixedSidenav from "./examples/fixedSidenav";

function Sidenav() {
    return (
        <ComponentDoc>
            <ComponentHeader
                title="Sidenav"
                status="ready"
            >
            </ComponentHeader>
            <DxcTabsForSections
                stickAtPx={64}
                tabsMode="underlined"
                sections={[
                    {
                        tabLabel: "Props",
                        section: () => (
                            <Section>
                                <DocTitle size={2}>Props</DocTitle> 
                                <SidenavPropsTable />
                            </Section>
                        )
                    },
                    {
                        tabLabel: "Theming",
                        section: () => (
                          <Section>
                            <DocTitle size={2}>Theming</DocTitle>
                            <SidenavTokensTable />
                          </Section>
                        ),
                      },
                    {
                        tabLabel: "Examples",
                        section: () => (
                            <Section>
                                <DocTitle size={2}>Examples</DocTitle>
                                <Example
                                    title="Default Sidenav"
                                    example={defaultSidenav}
                                >
                                </Example>
                                <Example
                                    title="Push content Sidenav"
                                    example={pushSidenav}
                                >
                                </Example>
                                <Example
                                    title="Sidenav without arrow"
                                    example={fixedSidenav}
                                >
                                </Example>
                            </Section>
                        )
                    }
                ]}
            ></DxcTabsForSections>
        </ComponentDoc>
    );
}

export default Sidenav;