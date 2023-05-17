import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';

export default function TemplateDemo() {
  const [visible, setVisible] = useState(false);

  const headerItems = [];

  let menuItems = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            {
              key: '0-0-0',
              label: 'Expenses.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Expenses Document',
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [
            {
              key: '0-1-0',
              label: 'Invoices.txt',
              icon: 'pi pi-fw pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        {
          key: '1-0',
          label: 'Meeting',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Meeting',
        },
        {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch',
        },
        {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review',
        },
      ],
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star-fill',
      children: [],
    },
  ];

  const start = (
    <>
      <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
      <span className="mx-3">Logo</span>
      <InputText placeholder="Search" type="text" className="w-half" />
    </>
  );
  const end = (
    <i className="pi pi-user mr-2" style={{ fontSize: '1.5rem' }}></i>
  );

  return (
    <>
      <Menubar model={headerItems} start={start} end={end} />
      <div className="card my-3">This is main content</div>
      <footer className="app-footer">
        <p>© 2023 My App. All rights reserved.</p>
      </footer>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Hello, Admin</h2>
        <Tree value={menuItems} className="w-full" />
      </Sidebar>
    </>
  );
}
