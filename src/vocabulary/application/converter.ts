export interface Converter<TDomain = any, TInsert = any, TSelect = any> {
  toDomain(obj: TSelect): TDomain

  toPersistence(obj: Partial<TDomain>, userId: string): TInsert
}
