import React from 'react';
import {
    Block,
    Wrapper,
    Drawer,
    UI,
    Flag,
    Tag,
    Action,
    ActionBlock,
    WrapperProvider,
    WrapperConsumer,
    Interview,
    Group,
    Title,
    ActionLink,
    Inputs
} from '@so.boss/pixel';

import { Header } from './Header';
import './page.css';


export const Page: React.FC<PageProps> = ({  }) => (
  <article>
      <section>
      <h2>Pixel + Genesis</h2>
      <p>
          Elements
          Wrappers
          Containers
          Style(https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904299268/Helpers)
          Base Config (color/font)
          AVAILABLE

          Elements: Title, Thing
          Wrappers: Wrapper, Label, Message
          Containers: Container, Group
          UNAVAILABLE:

          Elements: Block, Button, Icon
          Wrappers: Action, ActionBlock, ActionButton, ActionLink, Flag, Input, Inputs, InputSelect, Interview, Tag
          Containers: Drawer, Page
          All UI.*** Packages
      </p>
    </section>
    <section>
      <Block
          lines={[
            'Line One',
          ]}
      />
      <Block
          lines={[
            'CAAS100383547',
          ]}
      />

      <Block
          lines={[
            'Line One',
            'Line Two',
          ]}
      />
      <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
      />
      <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
          flag={{
            theme: 'bb8',
            label: 'Pending',
          }}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
      />

      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
          flag={{
            theme: 'yoda',
            label: 'Active',
          }}
      />
      <spacer/>
      <Block
          lines={[
            'Line One',
            'Line Two',
            ' ',
            'Line Four',
          ]}
      />
      <Block
          lines={[
            'CAAS100383547',
            'Second line about this and that',
            ' ',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Second line about this and that',
            ' ',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'flag',
                theme: 'saber',
                label: 'Pending',
              },
            ],
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
              {
                element: 'flag',
                theme: 'c3po',
                label: 'Policy Expired',
              },
            ],
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'flag',
                theme: 'saber',
                label: 'Pending',
              },
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
            ],
          ]}
      />
      <spacer/>
      <Block
          lines={[
            'Line One',
            'Line Two',
            'Line Three',
            'Line Four',
          ]}
      />
      <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            [
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
            ],
          ]}
          flag={{
            theme: 'saber',
            label: 'Active',
          }}
      />
      <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
          flag={{
            theme: 'c3po',
            label: 'Inactive',
          }}
      />

    </section>
    <section>
        <div>
            <ActionBlock
                lines={[
                    'Add Driver',
                    'Get coverage for another driver in your household',
                ]}
            >
                <Drawer>
                    {{
                        body: (
                            <Wrapper>
                                <Group id="1" type="step">
                                    {{
                                        header: (
                                            <Title>Please enter the following information:</Title>
                                        ),
                                        body: (
                                            <form>
                                                <input placeholder="First Name"/>
                                                <input placeholder="Middle"/>
                                                <input placeholder="Last Name"/>
                                                <input placeholder="Suffix"/>
                                                <input placeholder="Date of Birth"/>
                                            </form>
                                        ),
                                    }}
                                </Group>
                            </Wrapper>
                        ),
                        footer: (
                            <React.Fragment>
                                <ActionLink>Back</ActionLink>
                                <ActionLink>Next</ActionLink>
                            </React.Fragment>
                        ),
                    }}
                </Drawer>
            </ActionBlock>
        </div>
        <div>
            <Inputs
                id="names"
                initialValues={{
                    name: '',
                    address_street: '',
                    address_city: '',
                    address_zip: '',
                }}
            >
                <UI.Fields id="financier" />
            </Inputs>
        </div>
        <div>
            <Inputs
                id="names"
                initialValues={{
                    name: '',
                    address_street: '',
                    address_city: '',
                    address_zip: '',
                }}
            >
                <UI.Fields id="lessor" />
            </Inputs>
        </div>
        <div>
            <Inputs
                id="address"
                initialValues={{
                    address_street: '',
                    address_city: '',
                    address_zip: '',
                }}
            >
                <UI.Fields id="address" />
            </Inputs>
        </div>
        <div>
            <Inputs
                id="names"
                initialValues={{
                    name_first: 'Michael',
                    name_last: 'Kelly',
                    name_middle: '',
                    name_suffix: ''
                }}
            >
                <UI.Fields id="name_person"/>
            </Inputs>
        </div>
   </section>
  </article>
);
