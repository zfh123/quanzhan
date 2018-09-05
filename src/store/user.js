import Vue from 'vue'
export const CART_INSERT = 'CART_INSERT';
export const CART_REMOVER = 'CART_REMOVER';



export default {
	state: JSON.parse(localStorage.getItem('cart') || '{}'),
	mutations: {
		[CART_INSERT](state, data) {
			Object.assign(state, loginData);
			localStorage.setItem('user', JSON.stringify(state));
		},
		[CART_REMOVER](state) {
			localStorage.removeItem('user');
			localStorage.removeItem('payparam');
			localStorage.removeItem('token');
			Object.assign(state, {});
		}
	},
	actions: {
		[CART_INSERT]({ commit }, data) {
			commit('CART_INSERT', data)
		},
		[CART_REMOVER]({ commit },data) {
			commit('CART_REMOVER',data)
		}
	}
}
