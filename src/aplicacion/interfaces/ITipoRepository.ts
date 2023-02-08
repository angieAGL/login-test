export interface ITipoRepository {
  listarGenero(): Map<number, string>;
  listarActivo(): Map<boolean, string>;
}
