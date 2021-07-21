import { Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import CommonFeaturesDataGrid from './grids/CommonFeaturesDataGrid';
import SimpleDataGrid from './grids/SimpleDataGrid';

const GridCard = (props) => {
    const getDataGrid = (type) => {
        switch(type) {
            case 'SimpleDataGrid' :
                return (
                    <SimpleDataGrid></SimpleDataGrid>
                )
            case 'CommonFeaturesDataGrid':
                return (
                    <CommonFeaturesDataGrid></CommonFeaturesDataGrid>
                )
            default:
                return (
                    <SimpleDataGrid></SimpleDataGrid>
                )
        }
    }
    return (
        <Card>
            <CardHeader
                title={props.title}
            />
            <Divider />
            <CardContent>
                {getDataGrid(props.title)}
            </CardContent>
        </Card>
    )
}

export default GridCard;