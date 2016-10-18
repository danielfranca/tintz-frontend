import React from 'react';
import Survey from '../components/Survey';
import {Card, Button} from 'semantic-ui-react';

export default function About(props) {
    return <div>
        <Card>
            <Card.Content header='About Tintz' />
            <Card.Content>
            <p>Lorem ipsum dolor sit amet, ex eos nonumy audiam, eum at affert graecis noluisse. Vitae labores legendos an nec. Et vel liber iuvaret. Corpora scriptorem no vel, eu quas philosophia sed. Soleat option nominati sea at. Quem splendide mnesarchum sit ne, ut movet omittantur eum, pro no viderer gloriatur intellegam.</p>
            <p>Cu cum vero saperet constituam, veri graece cum ex, odio liber placerat eum id. Mei purto dicam impedit et, et moderatius ullamcorper vituperatoribus eos, mea ut populo tincidunt. Quem consulatu est ut, causae eligendi cu pri. Ad offendit dissentias his, melius perfecto id est. </p>
            </Card.Content>
            <Card.Content extra>
                <Survey />
            </Card.Content>
        </Card>
    </div>
}
