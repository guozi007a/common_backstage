import { Popover, Space, Button, QRCode } from 'antd';
import React from 'react';
import AliIcon from '@/components/AliIcon';
import PROFILE_ROOT_URL from '@/config/profileRootUrl';

const content = (
  <div>
        <QRCode
            errorLevel="H"
            value={`${window.location.origin}${process.env.NODE_ENV === 'development' ? '/' : (PROFILE_ROOT_URL + '/')}`}
        />
  </div>
);

const AppQRCode: React.FC = () => (
    <Space wrap>
        <Popover content={content} title="扫码可在手机上查看" trigger="click">
            <Button>
                <AliIcon icon='icon-shouji' styles={{fontSize: 34, cursor: 'pointer'}} />
            </Button>
        </Popover>
    </Space>
);

export default AppQRCode;