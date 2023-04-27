import { IonContent, IonPage, IonToolbar, IonHeader, IonTitle} from '@ionic/vue';
import EasyMode from '../components/EasyMode.vue';
import HardMode from '../components/HardMode.vue';

export default {
	components: {
		IonContent,
		IonPage,
		IonToolbar,
		IonHeader,
		IonTitle,
		EasyMode,
		HardMode
	},
	data() {
		return {
			hardMode: false
		};
	}
}
