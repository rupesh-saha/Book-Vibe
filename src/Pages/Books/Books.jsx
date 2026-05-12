import React, { useContext } from 'react';
import { BookContext } from '../../ Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/listed-books/ReadList';
import WishList from '../../Components/listed-books/WishList';

const Books = () => {
  const {storedBook, wishlistBook} = useContext(BookContext);

  return (
    <div className="mx-3">

      <Tabs>
        <TabList>
          <Tab><p className="font-extrabold">Read-List</p></Tab>
          <Tab><p className="font-extrabold">Wish-List</p></Tab>
        </TabList>

        <TabPanel>
          <ReadList></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;