import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#262626', // Cor de fundo do container
    width: '90%',
    marginLeft: '5%',
    borderWidth: 0.5,
    borderColor: '#5f5f5f',
  },
  checkBox: {
    marginRight: 10,
  },
  checkBoxButton: {
    width: 16,
    height: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4EA8DE', // Cor da borda quando não estiver marcado
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center', // Para centralizar a imagem dentro do círculo
  },
  checkBoxCircleCompleted: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: '#FFFFFF',
    backgroundColor:  "#5E60CE" // Para centralizar a imagem dentro do círculo
  },
  imageChecked: {
    width: 10,
    height: 10,
    tintColor: '#FFFFFF', // Altera a cor da imagem conforme necessário
  },
  textCompleted: {
    color: '#FFFFFF', // Cor do texto quando estiver marcado
    flex: 1, // Faz o texto ocupar todo o espaço restante
    textDecorationLine: 'line-through', // Adiciona uma linha no meio do texto
  },
  textUncompleted: {
    color: '#FFFFFF', // Cor do texto quando não estiver marcado
    flex: 1, // Faz o texto ocupar todo o espaço restante
  },
  trash: {
    width: 15,
    height: 15,
  },
  trashImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
});
