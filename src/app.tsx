import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React from 'react';

import { RootNavigator } from '@/navigation';

function App(): JSX.Element {
  return (
    <BottomSheetModalProvider>
      <RootNavigator />
    </BottomSheetModalProvider>
  );
}

export default App;
