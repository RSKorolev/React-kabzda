import React, { useState } from 'react';
import { OnOff } from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

export const MadeChanging = () => <OnOff on={true} />;
